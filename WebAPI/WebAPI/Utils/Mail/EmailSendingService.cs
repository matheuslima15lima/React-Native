﻿namespace WebAPI.Utils.Mail
{
    public class EmailSendingService
    {
        private readonly IEmailService _emailService;

        public EmailSendingService(IEmailService service)
        {
            _emailService = service;
        }

        // Método para envio de e-mail de boas vindas
        public async Task SendWelcomeEmail(string email, string userName)
        {
            try
            {
                MailRequest request = new MailRequest
                {
                    ToEmail = email,
                    Subject = "Bem vindo ao VitalHub!",
                    Body = GetHtmlContent(userName)
                };

                await _emailService.SendEmailAsync(request);
            }
            catch (Exception)
            {

                throw;
            }
        }

        // Método para envio de e-mailde recuperação de senha
        public async Task SendRecovery(string email, int codigo)
        {
            try
            {
                MailRequest request = new MailRequest
                {
                    ToEmail = email,
                    Subject = "Recuperação de senha",
                    Body = GetHtmlContentRecovery(codigo)
                };
            }
            catch (Exception)
            {
                throw;
            }
        }

        private string GetHtmlContentRecovery(int codigo)
        {
            string Response = @"
            <div style=""width:100%; background-color:rgba(96, 191, 197, 1); padding: 20px;"">
                <div style=""max-width: 600px; margin: 0 auto; background-color:#FFFFFF; border-radius: 10px; padding: 20px;"">
                    <img src=""https://blobvitalhub.blob.core.windows.net/containervitalhub/logotipo.png"" alt="" Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 200px;"" />
                    <h1 style=""color: #333333;text-align: center;"">Recuperação de senha</h1>
                    <p style=""color: #666666;font-size: 24px; text-align: center;"">Código de confirmação <strong>" + codigo + @"</strong></p>
                </div>
            </div>";

            return Response;
        }

        private string GetHtmlContent(string userName)
        {
            // Constrói o conteúdo HTML do e-mail, incluindo o nome do usuário
            string Response = @"
            <div style=""width:100%; background-color:rgba(96, 191, 197, 1); padding: 20px;"">
                <div style=""max-width: 600px; margin: 0 auto; background-color:#FFFFFF; border-radius: 10px; padding: 20px;"">
                    <img src=""https://blobvitalhub.blob.core.windows.net/containervitalhub/logotipo.png"" alt="" Logotipo da Aplicação"" style="" display: block; margin: 0 auto; max-width: 200px;"" />
                    <h1 style=""color: #333333; text-align: center;"">Bem-vindo ao VitalHub!</h1>
                    <p style=""color: #666666; text-align: center;"">Olá <strong>" + userName + @"</strong>,</p>
                    <p style=""color: #666666;text-align: center"">Estamos muito felizes por você ter se inscrito na plataforma VitalHub.</p>
                    <p style=""color: #666666;text-align: center"">Explore todas as funcionalidades que oferecemos e encontre os melhores médicos.</p>
                    <p style=""color: #666666;text-align: center"">Se tiver alguma dúvida ou precisar de assistência, nossa equipe de suporte está sempre pronta para ajudar.</p>
                    <p style=""color: #666666;text-align: center"">Aproveite sua experiência conosco!</p>
                    <p style=""color: #666666;text-align: center"">Atenciosamente,<br>Equipe VitalHub</p>
                </div>
            </div>";

            // Retorna o conteúdo HTML do e-mail
            return Response;
        }
    }
}