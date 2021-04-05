const arr=[{
        "縣市": "city1",
        "地區": [
            {
                "地區ID": "asd123",
                "地區名": "大安區",
                "展場": [
                    {
                        "展場名稱": "我好棒展場",
                        "展場ID": "asd456"
                    }
                ]
            },
            {
                "地區ID": "asd223",
                "地區名": "中正區",
                "展場": [
                    {
                        "展場名稱": "我好爛展場",
                        "展場ID": "asd789"
                    }
                ]
            }
        ]
    }
]

for (let i = 0 ; i < arr.length ; i++){  
    console.log(arr[i]["縣市"])
    console.log(arr[i]["地區"][0]["地區ID"])
    console.log(arr[i]["地區"][0]["地區名"]) 
};

for (let j = 0 ; j <arr.length ; j++ ){
    console.log(arr[j]["地區"][0]["展場"][0]["展場名稱"])
    console.log(arr[j]["地區"][0]["展場"][0]["展場ID"])
}
for (let k = 0 ; k < arr.length ; k++){  
    console.log(arr[k]["縣市"])
    console.log(arr[k]["地區"][1]["地區ID"])
    console.log(arr[k]["地區"][1]["地區名"]) 
};

for (let l = 0 ; l <arr.length ; l++ ){
    console.log(arr[l]["地區"][1]["展場"][0]["展場名稱"])   
    console.log(arr[l]["地區"][1]["展場"][0]["展場ID"])
}
