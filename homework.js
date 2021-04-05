function myFunction() {
	let str = ""
	for(let i=0, j=0; i<100; i++, j++){
   		if(j==26) j=0;
   		str+=`var o1 =  { ${String.fromCharCode(97+j)} : ${i}};</p>`;
		console.log(str);
}}
//問題為什麼在html 黨裡面可以執行 用js卻不行