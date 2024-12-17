using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace googleMaps.Controllers
{
    [ApiController]
    [Route("api/getmapslocation")]
    public class Maps : ControllerBase
    {
        [HttpGet()]
        public IActionResult getLocation(double latitude, double longitude)
        {
           //no need for this API if its just a simple google maps app, everything can be done in the angular side    
            return Ok(new { Name = "Location", Lat = latitude, Lng = longitude });
        }     
    }
}
