const seedrandom = require('seedrandom');

export default function newPassword(len: number, chars: string, pw: string, resource: string): string {
    let rng = seedrandom(pw+resource);

    let index = 0;
    let max = chars.length;
    let newpw = "";
    for(let i=0; i<len; i++) {
        index = Math.floor(rng() * max);
        newpw += chars[index];
    }

    return newpw;
}
