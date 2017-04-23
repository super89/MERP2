using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace MERP2.Controllers
{
    [Route("api/PUB01")]
    public class PUB01Controller: SYSBase.APIControllerBase
    {
        public PUB01Controller()
        {
            this.InputModelObjectType = typeof(Model.VAN.Models.ATTRMT);
        }
    }
}
