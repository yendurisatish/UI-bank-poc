using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FrontEndMVC.Controllers
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AdminHome()
        {
            return View();
        }
        public ActionResult GetAccountDetails()
        {
            return View();
        }
        public ActionResult CreateAccount()
        {
            return View();
        }
        public ActionResult UpdateAccount()
        {
            return View();
        }
        public ActionResult ViewLoans()
        {
            return View();
        }
        public ActionResult ViewDeposits()
        {
            return View();
        }
        public ActionResult ApproveLoans()
        {
            return View();
        }
        public ActionResult ApproveDeposits()
        {
            return View();
        }
        public ActionResult DeleteAccount()
        {
            return View();
        }
       
	}
}