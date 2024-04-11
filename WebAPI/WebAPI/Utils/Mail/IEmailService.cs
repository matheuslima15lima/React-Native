namespace WebAPI.Utils.Mail
{
    public interface IEmailService
    {
        //metodo assincrono para envio de e-mail
        Task SendEmailAsync(MailRequest mailRequest);
    }
}
