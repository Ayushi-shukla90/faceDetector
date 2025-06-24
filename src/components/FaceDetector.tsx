import React, { useState, useRef, useCallback } from 'react';
import { Upload, Eye, AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * @typedef {Object} Detection
 * @property {{ x: number, y: number, width: number, height: number }} bbox
 * @property {number} confidence
 * @property {'Male' | 'Female'} gender
 */

export const FaceDetector = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [detections, setDetections] = useState<Detection>([]);
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

  const simulateDetection = useCallback(async (imageElement: HTMLImageElement) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    const x = Math.random() * (imageElement.width * 0.6);
    const y = Math.random() * (imageElement.height * 0.6);
    const width = 100 + Math.random() * 100;
    const height = 120 + Math.random() * 120;
    const gender = Math.random() > 0.5 ? 'Male' : 'Female';

    return [{
      bbox: { x, y, width, height },
      confidence: 0.7 + Math.random() * 0.29,
      gender,
    }];
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

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        try {
          const results = await simulateDetection(img);
          setDetections(results);

          ctx.strokeStyle = '#3b82f6';
          ctx.lineWidth = 3;
          ctx.fillStyle = 'rgba(59, 130, 246, 0.2)';

          results.forEach((detection) => {
            const { x, y, width, height } = detection.bbox;

            ctx.fillRect(x, y, width, height);
            ctx.strokeRect(x, y, width, height);

            // Draw confidence and gender label
            ctx.fillStyle = '#3b82f6';
            ctx.fillRect(x, y - 45, 110, 40);
            ctx.fillStyle = 'white';
            ctx.font = 'bold 13px Arial';
            ctx.fillText(`Conf: ${(detection.confidence * 100).toFixed(1)}%`, x + 5, y - 25);
            ctx.fillText(`Gender: ${detection.gender}`, x + 5, y - 10);
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
                    <Button onClick={resetDetector} variant="outline">
                      Reset
                    </Button>
                  </div>

                  <div className="border rounded-lg overflow-hidden bg-gray-50">
                    <canvas
                      ref={canvasRef}
                      className="max-w-full h-auto"
                      style={{ display: imageUrl ? 'block' : 'none' }}
                    />
                  </div>

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
                            <p className="text-sm text-green-700">
                              <strong>Detected Gender:</strong> {detections[0].gender}
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
