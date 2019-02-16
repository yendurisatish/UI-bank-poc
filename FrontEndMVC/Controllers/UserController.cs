using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FrontEndMVC.Controllers
{
    public class UserController : Controller
    {
        //
        // GET: /User/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult UserHome()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult ApplyDeposits()
        {
            return View();
        }
        public ActionResult ApplyLoans()
        {
            return View();
        }
        public ActionResult SendMoney()
        {
            return View();
        }
        public ActionResult TransactionHistory()
        {
            return View();
        }
        public ActionResult ViewDeposits()
        {
            return View();
        }
        public ActionResult ViewLoans()
        {
            return View();
        }
	}
}