using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Microsoft.Extensions.Configuration;

namespace MERP2.Controllers.SYSBase
{
    
    [Produces("application/json")]
    public class APIControllerBase : Controller
    {
        private System.Type _inputModelObjectType;
        public System.Type InputModelObjectType
        {
            get { return _inputModelObjectType; }
            set { this._inputModelObjectType = value; }
        }

        private Model.VAN.Models.VAN_DBContext _context;
        public Model.VAN.Models.VAN_DBContext DBContext
        {
            get { return _context; }
            set { this._context = value; }
        }

        public IConfigurationRoot Configuration { get; set; }


        public APIControllerBase()
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
           .AddJsonFile("appsettings.json");

            Configuration = builder.Build();

            this.DBContext = new Model.VAN.Models.VAN_DBContext(Configuration.GetConnectionString("DefaultConnection"));
        }


        [HttpGet]
        [Route("Query")]
        public dynamic GetQuery()
        {

            return _context.GetType().GetProperty(this._inputModelObjectType.Name).GetValue(_context, null);
            //JObject jObject = new JObject();
            //jObject.Add(new JProperty("message", JToken.FromObject(_context.GetType().GetProperty(this._inputModelObjectType.Name))));
            //return jObject;

            //return JsonConvert.SerializeObject(_context.GetType().GetProperty(this._inputModelObjectType.Name).GetValue(_context,null), Formatting.None,
            //        new JsonSerializerSettings()
            //        {
            //            ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
            //            DateTimeZoneHandling = DateTimeZoneHandling.Local
            //        });

            //return JsonConvert.SerializeObject(_context.SYSNO, Formatting.None,
            //        new JsonSerializerSettings()
            //        {
            //            ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
            //            DateTimeZoneHandling = DateTimeZoneHandling.Local
            //        });


        }

        [HttpPost]
        [Route("Save")]

        public dynamic POSTSave([FromBody]object value)
        {
            dynamic current = Newtonsoft.Json.JsonConvert.DeserializeObject(value.ToString(),
                new Newtonsoft.Json.JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
                    DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local
                });

            foreach (var delete in current as IQueryable)
            {

                dynamic item = Newtonsoft.Json.JsonConvert.DeserializeObject(value.ToString(), this._inputModelObjectType,
                new Newtonsoft.Json.JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
                    DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local
                });

                item.ADD_DT = DateTime.Now;
                if (item.ID == Guid.Empty)
                {
                    _context.SYSNO.Add(item);
                }
                else
                {
                    _context.SYSNO.Update(item);
                }
            }
            _context.SaveChanges();
            return _context.SYSNO;
        }

        [HttpPost]
        [Route("Delete")]

        public dynamic POSTDelete([FromBody]object value)
        {
            var current = Newtonsoft.Json.JsonConvert.DeserializeObject<Model.VAN.Models.SYSNO>(value.ToString(),
                new Newtonsoft.Json.JsonSerializerSettings()
                {
                    ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
                    DateTimeZoneHandling = Newtonsoft.Json.DateTimeZoneHandling.Local
                });
            string id = current.ID.ToString();
            _context.SYSNO.Remove(current);
            _context.SaveChanges();
            return _context.SYSNO;
        }

    }
}
