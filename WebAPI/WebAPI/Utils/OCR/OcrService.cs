using Microsoft.Azure.CognitiveServices.Vision.ComputerVision;
using Microsoft.Azure.CognitiveServices.Vision.ComputerVision.Models;
using Org.BouncyCastle.Security;

namespace WebAPI.Utils.OCR
{
    public class OcrService
    {
        private readonly string _subscriptKey = "79b5354d17a5411cb6e498619e2ada92";

        private readonly string _endpoint = "https://vitalhubmatheusl.cognitiveservices.azure.com/";

        public async Task<string> RecognizeTextAsync (Stream imageStream)
        {
            try
            {
                var client = new ComputerVisionClient(new ApiKeyServiceClientCredentials(_subscriptKey))
                {
                    Endpoint = _endpoint
                };

                var ocrResult = await client.RecognizePrintedTextInStreamAsync(true, imageStream);

                return ProcessRecognitionResult(ocrResult);
            }
            catch (Exception ex) {
                    return "Erro ao reconhecer o texto" + ex.Message;
            }

           
        }


        private static string ProcessRecognitionResult(OcrResult result)
        {
            try
            {
                string recognizedText = "";

                foreach (var region in result.Regions)
                {
                    foreach (var line in region.Lines)
                    {
                        foreach (var word in line.Words)
                        {
                            recognizedText += word.Text + " ";
                        }

                        recognizedText += "\n";
                    }
                }

                return recognizedText;
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
