function x()
{
    var a=71
    return function y()
    {
        return function z()
        {
            console.log(a)
        }
    }
}
b=x();
console.log(b);
c=b();
console.log(c)
c();