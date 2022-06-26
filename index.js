function Students(n,c,u,i,b){
    this.name=n;
    this.course=c;
    this.unit=u;
    this.image=i;
    this.batch="ft-web"+ b;
}


function storeData(e){
    e.preventDefault();
    let form=document.getElementById("students_data");
    let name=form.name.value
    let course=form.course.value
    let unit=form.unit.value
    let image=form.image.value
    let batch=form.batch.value

    let s1=new Students(name,course,unit,image,batch)

    let data=JSON.parse(localStorage.getItem("Students")) || [];

    data.push(s1);
    localStorage.setItem("Students",JSON.stringify(data))


    

}
 function Calculate(){
    let data=JSON.parse(localStorage.getItem("Students")) || [];

    let obj={};

    for(let i=0;i<data.length;i++){
        if(!obj[data[i].batch]){
            obj[data[i].batch]=0;

        }
    }

    for(let i=0;i<data.length;i++){
        obj[data[i].batch]++;
      
    }
    console.log(obj)
}
Calculate()