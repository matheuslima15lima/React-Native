using Azure.Storage.Blobs;

namespace WebAPI.Utils.BlobStorage
{
    public static class AzureBlobStorageHelper
    {
        public static async Task<string> UploadImageBlobAsync(IFormFile arquivo, string stringConexao, string nomeContainer)
        {
			try
			{
				//verifica see existe um arquivo
				if (arquivo != null)
				{
					//gera um nome unico + extensao do arquivo
					var blobName = Guid.NewGuid().ToString().Replace("-","")+Path.GetExtension(arquivo.FileName);

					//cria uma instancia do clienat Blob service e passa uma string de conexao
					var blobServiceClient = new BlobServiceClient(stringConexao);

					//obtem um container client usando o nome do container do blob
					var blobContainerClient = blobServiceClient.GetBlobContainerClient(nomeContainer);

					//obtem um blob client usando o blob name
					var blobClient = blobContainerClient.GetBlobClient(blobName);

					//abre o fluxo de entrada do arquivo(foto)
					using(var stream = arquivo.OpenReadStream())
					{
						//carrega o arquivo(foto) para o blob storage de forma assincrona
						await blobClient.UploadAsync(stream, true);
					}

					//retorna a uri do blob como uma string
					return blobClient.Uri.ToString();
				}

				else
				{	
					// retorna a uri padrao
					return "https://blobvitalhubmatheusl.blob.core.windows.net/containervitalhubmatheusl/blank-profile-picture-973460_1280.png";
				}

			}
			catch (Exception)
			{

				throw;
			}
        }
    }
}
