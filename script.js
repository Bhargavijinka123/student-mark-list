const show =()=>{
    let m1=document.getElementById('m1').value
    let m2=document.getElementById('m2').value
    let m3=document.getElementById('m3').value
    let m4=document.getElementById('m4').value
    let m5=document.getElementById('m5').value
    console.log(m1,m2,m3,m4,m5)
    let ma1=Number(m1)
    let ma2=Number(m2)
    let ma3=Number(m3)
    let ma4=Number(m4)
    let ma5=Number(m5)
    console.log(ma1+ma2+ma3+ma4+ma5)
    let total=ma1+ma2+ma3+ma4+ma5
    document.getElementById('tt').value=total
    let p1=total/500*100
    document.getElementById('pr').value=p1
}