var h = parseInt(prompt("Hello, how many levels do you want for your pyramid ?"));


function myPyramid(h)
{
    for(var i = 1 ; i <= h ; i++)
    {

    var row = "";

        for (var j = 1 ; j <= i ; j++)
        {
        row += "##";
        }

console.log(row);
    }
}

myPyramid(h)