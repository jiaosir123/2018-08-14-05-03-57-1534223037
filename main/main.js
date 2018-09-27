module.exports = function main() {
    var sum=0;
var n=paseInt(arguments[0]);
while(n!==0)
{
sum=sum+n%10;
var n=Math.floor(n/10);
}
return sum;
  // Write your code here
};
