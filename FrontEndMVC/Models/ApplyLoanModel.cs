using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FrontEndMVC.Models
{
    public class ApplyLoanModel
    {
        public string Income { get; set; }
        public string LoanType { get; set; }
        public string EmpType { get; set; }
        public string City { get; set; }
       // public string EmpType { get; set; }
        public string LoanAmount { get; set; }
    }
}