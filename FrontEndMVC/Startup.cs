using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FrontEndMVC.Startup))]
namespace FrontEndMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
