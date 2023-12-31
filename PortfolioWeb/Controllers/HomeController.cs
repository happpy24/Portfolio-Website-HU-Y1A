﻿using Microsoft.AspNetCore.Mvc;
using PortfolioWeb.Models;
using System.Diagnostics;


namespace PortfolioWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Route("education")]
        public IActionResult Education()
        {
            return View();
        }

        [Route("about")]
        public IActionResult About()
        {
            System.Diagnostics.Debugger.Launch();
            return View();
        }

        [Route("projects")]
        public IActionResult Projects()
        {
            return View();
        }

        [Route("contact")]
        public IActionResult Contact()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}