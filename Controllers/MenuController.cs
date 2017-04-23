using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MERP2.Controllers
{
    [Route("api/Menu")]
    public class MenuController : SYSBase.APIControllerBase
    {

        [Route("Nodes")]
        [HttpGet]
        public IEnumerable<Node> GetNodes()
        {
            List<Node> menus = new List<Node>();


            var vm = DBContext.vw_System_Program_Menu.OrderBy(t => t.SYS_SR).ThenBy(t => t.BASCodeTableDetail_OrderSR).ThenBy(t => t.PROGRAMNO_ORDERID);


            var vmG1 = vm.GroupBy(t => new { t.SYS_SR, t.SYSNO, t.SYSNO_NAME });
            foreach (var g1 in vmG1)
            {
                //Models.Common.Menu m1 = new Models.Common.Menu() { label = /*"[" + g1.Key.SYSNO + "]" +*/ g1.Key.SYSNO_NAME };
                Node m1 = new Node() { label = g1.Key.SYSNO_NAME, data = g1.Key.SYSNO_NAME, expandedIcon = "fa-folder-open", collapsedIcon = "fa-folder" };
                menus.Add(m1);

                var vmG2 = vm.Where(t => t.SYSNO == g1.Key.SYSNO).GroupBy(t => new { t.BASCodeTableDetail_OrderSR, t.Kind_Name });

                foreach (var g2 in vmG2)
                {
                    //Models.Common.Menu m2 = new Models.Common.Menu() { label = /*"[" + g2.Key.BASCodeTableDetail_OrderSR + "]" +*/ g2.Key.Kind_Name };
                    Node m2 = new Node() { label = g2.Key.Kind_Name, data = g2.Key.Kind_Name, expandedIcon = "fa-folder-open", collapsedIcon = "fa-folder" };
                    m1.children.Add(m2);

                    var vmG3 = vm.Where(t => t.SYSNO == g1.Key.SYSNO && t.Kind_Name == g2.Key.Kind_Name).OrderBy(t => t.PROGRAMNO_ORDERID).ThenBy(t => t.PRGNO);

                    foreach (var g3 in vmG3)
                    {
                        Node m3 = new Node()
                        {
                            label = g3.PROGRAMNO_NAME,
                            data = g3.PROGRAMNO_NAME,
                            expandedIcon = "fa-folder-open",
                            collapsedIcon = "fa-folder"
                        };
                        m2.children.Add(m3);

                    }
                }
            }




            //}
            //else
            //{
            //    var vm = db.vw_System_Program_Menu_USER.Where(t => t.USR_NO.ToUpper() == user.Identity.Name.ToUpper() && t.C_RUN == "Y").OrderBy(t => t.SYS_SR).ThenBy(t => t.BASCodeTableDetail_OrderSR).ThenBy(t => t.PROGRAMNO_ORDERID);


            //    var vmG1 = vm.GroupBy(t => new { t.SYS_SR, t.SYSNO, t.SYSNO_NAME });
            //    foreach (var g1 in vmG1)
            //    {
            //        Models.Common.Menu m1 = new Models.Common.Menu() { label = /*"[" + g1.Key.SYSNO + "]" +*/ g1.Key.SYSNO_NAME };
            //        menus.Add(m1);

            //        var vmG2 = vm.Where(t => t.SYSNO == g1.Key.SYSNO).GroupBy(t => new { t.BASCodeTableDetail_OrderSR, t.Kind_Name });

            //        foreach (var g2 in vmG2)
            //        {
            //            Models.Common.Menu m2 = new Models.Common.Menu() { label = /*"[" + g2.Key.BASCodeTableDetail_OrderSR + "]" +*/ g2.Key.Kind_Name };
            //            m1.children.Add(m2);

            //            var vmG3 = vm.Where(t => t.SYSNO == g1.Key.SYSNO && t.Kind_Name == g2.Key.Kind_Name).OrderBy(t => t.PROGRAMNO_ORDERID).ThenBy(t => t.PRGNO);

            //            foreach (var g3 in vmG3)
            //            {
            //                Models.Common.Menu m3 = new Models.Common.Menu()
            //                {
            //                    label = /*"[" + g3.PRGNO + "]" +*/ g3.PROGRAMNO_NAME,
            //                    url = g3.PRGNO,
            //                    path = g1.Key.SYSNO_NAME + ">" + g2.Key.Kind_Name + ">" + "[" + g3.PRGNO + "]" + g3.PROGRAMNO_NAME,
            //                    C_ADD = g3.C_ADD,
            //                    C_ATT = g3.C_ATT,
            //                    C_CFM = g3.C_CFM,
            //                    C_CPY = g3.C_CPY,
            //                    C_CST = g3.C_CST,
            //                    C_DEL = g3.C_DEL,
            //                    C_EML = g3.C_EML,
            //                    C_MDY = g3.C_MDY,
            //                    C_QRY = g3.C_QRY,
            //                    C_RUN = g3.C_RUN,
            //                    C_SIN = g3.C_SIN,
            //                    C_UCF = g3.C_UCF
            //                };
            //                m2.children.Add(m3);

            //                //var vmG4 = vm.Where(t => t.sMSystemCode == g1.Key.sMSystemCode && t.SystemCode == g2.Key.SystemCode && t.sSubSystemCode == g3.Key.sSubSystemCode).GroupBy(t => new { t.sProgramCode, t.sProgramName });

            //                //foreach (var g4 in vmG4)
            //                //{
            //                //    Models.Common.Menu m4 = new Models.Common.Menu() { label = "[" + g4.Key.sProgramCode + "]" + g4.Key.sProgramName , url= g4.Key.sProgramCode };
            //                //    m3.children.Add(m4);


            //                //}

            //            }
            //        }
            //    }
            //

            return menus;
        }
    }

    public class Node
    {
        public string label { get; set; }
        public string data { get; set; }
        public string expandedIcon { get; set; }
        public string collapsedIcon { get; set; }
        public List<Node> children { get; set; }
        public Node()
        {
            children = new List<Node>();
        }
    }
}
