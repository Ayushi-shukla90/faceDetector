import React, { useState, useRef, useCallback } from 'react';
import { Upload, Eye, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// ...rest of the code remains unchanged...
/**
 * @typedef {Object} Detection
 * @property {{ x: number, y: number, width: number, height: number }} bbox
 * @property {number} confidence
 */

export const FaceDetector = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [detections, setDetections] = useState([]);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileSelect = useCallback((event) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImageUrl(URL.createObjectURL(file));
      setDetections([]);
      setError('');
    }
  }, []);

  const simulateDetection = useCallback(async (imageElement) => {
    // Simulate face detection processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate mock detections based on image dimensions
    const mockDetections = [];
    const numFaces = Math.floor(Math.random() * 3) + 1; // 1-3 faces
    
    for (let i = 0; i < numFaces; i++) {
      const x = Math.random() * (imageElement.width * 0.6);
      const y = Math.random() * (imageElement.height * 0.6);
      const width = 80 + Math.random() * 120; // 80-200px width
      const height = 100 + Math.random() * 140; // 100-240px height
      
      mockDetections.push({
        bbox: { x, y, width, height },
        confidence: 0.7 + Math.random() * 0.29 // 0.7-0.99 confidence
      });
    }
    
    return mockDetections;
  }, []);

  const detectFaces = useCallback(async () => {
    if (!selectedFile || !canvasRef.current) return;

    setIsProcessing(true);
    setError('');

    try {
      const img = new Image();
      img.onload = async () => {
        const canvas = canvasRef.current;
        if (!canvas) {
          setError('Canvas not available.');
          setIsProcessing(false);
          return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError('Unable to get canvas context.');
          setIsProcessing(false);
          return;
        }
        
        // Set canvas dimensions to match image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw the image
        ctx.drawImage(img, 0, 0);
        
        try {
          // Simulate face detection
          const results = await simulateDetection(img);
          setDetections(results);
          
          // Draw bounding boxes
          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 3;
          ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
          
          results.forEach((detection, index) => {
            const { x, y, width, height } = detection.bbox;
            
            // Draw bounding box
            ctx.fillRect(x, y, width, height);
            ctx.strokeRect(x, y, width, height);
            
            // Draw confidence label
            ctx.fillStyle = '#3b82f6';
            ctx.fillRect(x, y - 25, 80, 25);
            ctx.fillStyle = 'white';
            ctx.font = '14px Arial';
            ctx.fillText(`${(detection.confidence * 100).toFixed(1)}%`, x + 5, y - 8);
            ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';
          });
          
        } catch (err) {
          setError('Face detection failed. Please try again.');
          console.error('Detection error:', err);
        } finally {
          setIsProcessing(false);
        }
      };
      
      img.onerror = () => {
        setError('Failed to load image. Please try a different file.');
        setIsProcessing(false);
      };
      
      img.src = imageUrl;
    } catch (err) {
      setError('An unexpected error occurred.');
      setIsProcessing(false);
    }
  }, [selectedFile, imageUrl, simulateDetection]);

  const resetDetector = useCallback(() => {
    setSelectedFile(null);
    setImageUrl('');
    setDetections([]);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <section id="detector" className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Face Detector</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Test face detection capabilities on challenging images. Upload an image to see how well our system performs under adverse conditions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-purple-600" />
                Face Detection Demo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Section */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Choose an image to test face detection
                </p>
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Select Image
                </Button>
              </div>

              {/* Image Display and Results */}
              {imageUrl && (
                <div className="space-y-4">
                  <div className="flex gap-4 flex-wrap">
                    <Button
                      onClick={detectFaces}
                      disabled={isProcessing}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Detecting...
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 mr-2" />
                          Detect Faces
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={resetDetector}
                      variant="outline"
                    >
                      Reset
                    </Button>
                  </div>

                  {/* Canvas for image display and detection results */}
                  <div className="border rounded-lg overflow-hidden bg-gray-50">
                    <canvas
                      ref={canvasRef}
                      className="max-w-full h-auto"
                      style={{ display: imageUrl ? 'block' : 'none' }}
                    />
                  </div>

                  {/* Results Summary */}
                  {detections.length > 0 && (
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <h3 className="font-semibold text-green-800">Detection Results</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-green-700">
                              <strong>Faces Detected:</strong> {detections.length}
                            </p>
                            <p className="text-sm text-green-700">
                              <strong>Average Confidence:</strong>{' '}
                              {(detections.reduce((sum, d) => sum + d.confidence, 0) / detections.length * 100).toFixed(1)}%
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-green-700">
                              <strong>Status:</strong> Detection Complete
                            </p>
                            <p className="text-sm text-green-700">
                              <strong>Processing Time:</strong> ~2.0s
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Error Display */}
                  {error && (
                    <Card className="bg-red-50 border-red-200">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-red-600" />
                          <p className="text-red-800">{error}</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
