const msm=Symbol('key 1')
const obj={[msm]:"hello"}
console.log(obj[msm])
console.log(msm)
console.log(obj)