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
                Node m1 = new Node() { label = g1.Key.SYSNO_NAME, data = "", expandedIcon = "fa-folder-open", collapsedIcon = "fa-folder" };
                menus.Add(m1);

                var vmG2 = vm.Where(t => t.SYSNO == g1.Key.SYSNO).GroupBy(t => new { t.BASCodeTableDetail_OrderSR, t.Kind_Name });

                foreach (var g2 in vmG2)
                {
                    Node m2 = new Node() { label = g2.Key.Kind_Name, data = "", expandedIcon = "fa-folder-open", collapsedIcon = "fa-folder" };
                    m1.children.Add(m2);

                    var vmG3 = vm.Where(t => t.SYSNO == g1.Key.SYSNO && t.Kind_Name == g2.Key.Kind_Name).OrderBy(t => t.PROGRAMNO_ORDERID).ThenBy(t => t.PRGNO);

                    foreach (var g3 in vmG3)
                    {
                        Node m3 = new Node()
                        {
                            label = g3.PROGRAMNO_NAME,
                            data = g3.PRGNO,
                            expandedIcon = "fa-folder-open",
                            collapsedIcon = "fa-folder"
                        };
                        m2.children.Add(m3);

                    }
                }
            }


            return menus;
        }

        [Route("Menus")]
        [HttpGet]
        public IEnumerable<Menu> GetMenus()
        {
            List<Menu> menus = new List<Menu>();


            var vm = DBContext.vw_System_Program_Menu.OrderBy(t => t.SYS_SR).ThenBy(t => t.BASCodeTableDetail_OrderSR).ThenBy(t => t.PROGRAMNO_ORDERID);


            var vmG1 = vm.GroupBy(t => new { t.SYS_SR, t.SYSNO, t.SYSNO_NAME });
            foreach (var g1 in vmG1)
            {
                Menu m1 = new Menu() { label = g1.Key.SYSNO_NAME, url = "", icon= "fa-file-o" };
                menus.Add(m1);

                var vmG2 = vm.Where(t => t.SYSNO == g1.Key.SYSNO).GroupBy(t => new { t.BASCodeTableDetail_OrderSR, t.Kind_Name });

                foreach (var g2 in vmG2)
                {
                    Menu m2 = new Menu() { label = g2.Key.Kind_Name, url = "", icon = "fa-file-o" };
                    m1.items.Add(m2);

                    var vmG3 = vm.Where(t => t.SYSNO == g1.Key.SYSNO && t.Kind_Name == g2.Key.Kind_Name).OrderBy(t => t.PROGRAMNO_ORDERID).ThenBy(t => t.PRGNO);

                    foreach (var g3 in vmG3)
                    {
                        Menu m3 = new Menu()
                        {
                            label = g3.PROGRAMNO_NAME,
                            url = g3.PRGNO,
                            icon = "fa-download"
                        };
                        m2.items.Add(m3);

                    }
                }
            }


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

    public class Menu
    {
        public string label { get; set; }
        public string icon { get; set; }
        public string routerLink { get; set; }
        public List<Menu> items { get; set; }
        public string url { get; set; }
        public Menu()
        {
            items = new List<Menu>();
        }
    }
}
