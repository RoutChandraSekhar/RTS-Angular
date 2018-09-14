$(document).ready(function(){
 
   /* $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 200, 
        format: 'dd/mm/yyyy'
      });
      */
      
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'assets/images/google.png'
        }
    });
});