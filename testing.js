// Fetching HTML Elements in Variables by ID.
function GEEKFORGEEKS()                                    
{ 
    var name = document.forms["RegForm"]["Name"];               
    var email = document.forms["RegForm"]["EMail"];    
    var phone = document.forms["RegForm"]["Telephone"];  
    var what =  document.forms["RegForm"]["Subject"];  
    var address = document.forms["RegForm"]["Address"];  
    var suggestions = document.forms["RegForm"]["suggestions"];  
    var activity = document.forms["RegForm"]["activity"];  
   
   
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        name.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    }  
     if (suggestions.value == "")                           
    { 
        window.alert("Have more suggestions? Write here"); 
        phone.focus(); 
        return false; 
    } 
   
    if (activity.value == "")                           
    { 
        window.alert("Next, how much of a typical company or team arrange fun or interactive activities at work?"); 
        phone.focus(); 
        return false; 
    } 
   
   
    return true; 
    }