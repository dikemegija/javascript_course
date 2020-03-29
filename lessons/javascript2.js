/*write a Javascript function that returns a passed string with letters in
alphabetical order .
Example string : 'webmaster'
Expected Output : 'abeemrstw'
 */

function alphabet_sorting(str)
{
    return str.split('').sort().join('');
}
console.log(alphabet_sorting("webmaster"));