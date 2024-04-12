using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Contexts;
using WebAPI.Domains;
using WebAPI.Utils.Mail;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecuperarSenhaController : ControllerBase
    {
        private readonly VitalContext _context;

        private readonly EmailSendingService _emailSendingService;
        public RecuperarSenhaController(VitalContext context, EmailSendingService emailSendingService) 
        {

            _context = context; 
            _emailSendingService = emailSendingService;
        }

        [HttpPost]
        public async Task<IActionResult> SendRecoveryCodePassword(string email)
        {
            try
            {
                Usuario user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("Usuário não encontrado");
                }

                //gerar um codigo com 4 algarismos
                Random random = new Random();
                int recoveryCode = random.Next(1000, 9999);

                user.CodRecupSenha = recoveryCode;

                await _context.SaveChangesAsync();

                await _emailSendingService.SendRecovery(user.Email!, recoveryCode);

                return Ok("Código enviado com sucesso!!!");
            }
            catch (Exception e)
            {

               return BadRequest(e.Message);    
            }
        }


        [HttpPost("Verificação de código")]
        public async Task<IActionResult> VerifyCode(int verifyCode , string email)
        {
            try
            {
                Usuario user = await _context.Usuarios.FirstOrDefaultAsync(x => x.Email == email);

                if (user == null)
                {
                    return NotFound("usuario nao encontrado");
                }
               
                if (user.CodRecupSenha != verifyCode)
                {


                    return BadRequest("os codigos nao batem");


                }

                //passando o valor de CodRecupSenha para nulo
                user.CodRecupSenha = null;

                //salva alteracoes
                await _context.SaveChangesAsync();

                return Ok("Senha recuperada com sucesso!!!");

      
               
               

               
            }
            catch (Exception e )
            {
                return BadRequest(e.Message);
                
            }
          
        }
    }
}
