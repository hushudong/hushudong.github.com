var src={
    "HeWeather5": [
        {
            "basic": {
                "city": "北京",
                "cnty": "中国",
                "id": "CN101010100",
                "lat": "39.904000",
                "lon": "116.391000",
                "update": {
                    "loc": "2017-03-23 16:02",
                    "utc": "2017-03-23 08:02"
                }
            },
            "daily_forecast": [
                {
                    "astro": {
                        "mr": "03:07",
                        "ms": "13:23",
                        "sr": "06:13",
                        "ss": "18:29"
                    },
                    "cond": {
                        "code_d": "305",
                        "code_n": "305",
                        "txt_d": "小雨",
                        "txt_n": "小雨"
                    },
                    "date": "2017-03-23",
                    "hum": "58",
                    "pcpn": "5.8",
                    "pop": "100",
                    "pres": "1024",
                    "tmp": {
                        "max": "10",
                        "min": "2"
                    },
                    "uv": "2",
                    "vis": "13",
                    "wind": {
                        "deg": "125",
                        "dir": "东风",
                        "sc": "微风",
                        "spd": "3"
                    }
                },
                {
                    "astro": {
                        "mr": "03:49",
                        "ms": "14:22",
                        "sr": "06:11",
                        "ss": "18:30"
                    },
                    "cond": {
                        "code_d": "305",
                        "code_n": "104",
                        "txt_d": "小雨",
                        "txt_n": "阴"
                    },
                    "date": "2017-03-24",
                    "hum": "68",
                    "pcpn": "3.3",
                    "pop": "100",
                    "pres": "1022",
                    "tmp": {
                        "max": "7",
                        "min": "0"
                    },
                    "uv": "2",
                    "vis": "14",
                    "wind": {
                        "deg": "43",
                        "dir": "南风",
                        "sc": "微风",
                        "spd": "3"
                    }
                },
                {
                    "astro": {
                        "mr": "04:28",
                        "ms": "15:25",
                        "sr": "06:10",
                        "ss": "18:31"
                    },
                    "cond": {
                        "code_d": "101",
                        "code_n": "100",
                        "txt_d": "多云",
                        "txt_n": "晴"
                    },
                    "date": "2017-03-25",
                    "hum": "54",
                    "pcpn": "0.0",
                    "pop": "10",
                    "pres": "1022",
                    "tmp": {
                        "max": "14",
                        "min": "4"
                    },
                    "uv": "4",
                    "vis": "18",
                    "wind": {
                        "deg": "246",
                        "dir": "南风",
                        "sc": "微风",
                        "spd": "0"
                    }
                }
            ],
            "status": "ok"
        }
    ]
}
function dome(){
	var flag=document.getElementById("bottom");
	flag.innerHTML="城市："+src.HeWeather5[0].basic.city+"日期:"+src.HeWeather5[0].daily_forecast[0].date+"天气:"+src.HeWeather5[0].daily_forecast[0].cond.txt_n;
}




















