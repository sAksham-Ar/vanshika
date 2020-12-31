function Gallery(){
    var idx=0;
    function showimg(i){
           var images=document.getElementsByTagName('img');
           images[idx].style.display='none';
           idx+=i;
           const n=images.length;
           if(idx<0)
           {
             idx=n-1;
           }
           else if(idx>=n)
           {
             idx=0;
           }
            images[idx].style.display='block';
           

    }
    return(
        <div className="gallery">
            <button onClick={() => showimg(-1)} className="left">&larr;</button>
            <button onClick={() => showimg(1)} className="right">&rarr;</button>
            <img src="gallery/20150101_163715.jpg" alt="20150101_163715.jpg"></img>
<img src="gallery/DSCN0316.jpg" alt="DSCN0316.jpg"></img>
<img src="gallery/IMAG0113.jpg" alt="IMAG0113.jpg"></img>
<img src="gallery/IMG_20190101_163547.jpg" alt="IMG_20190101_163547.jpg"></img>
<img src="gallery/IMG_20191230_202951.jpg" alt="IMG_20191230_202951.jpg"></img>
<img src="gallery/IMG_20191230_221149.jpg" alt="IMG_20191230_221149.jpg"></img>
<img src="gallery/SAM_1387.JPG" alt="SAM_1387.JPG"></img>
<img src="gallery/SAM_2102.JPG" alt="SAM_2102.JPG"></img>
<img src="gallery/20150101_161757.jpg" alt="20150101_161757.jpg"></img>
<img src="gallery/20150101_163715.jpg" alt="20150101_163715.jpg"></img>
<img src="gallery/DSCN0316.jpg" alt="DSCN0316.jpg"></img>
<img src="gallery/DSCN0318.jpg" alt="DSCN0318.jpg"></img>
<img src="gallery/IMAG0113.jpg" alt="IMAG0113.jpg"></img>
<img src="gallery/IMG_20190101_163547.jpg" alt="IMG_20190101_163547.jpg"></img>
<img src="gallery/IMG_20190101_164402.jpg" alt="IMG_20190101_164402.jpg"></img>
<img src="gallery/IMG_20191230_202951.jpg" alt="IMG_20191230_202951.jpg"></img>
<img src="gallery/IMG_20191230_221149.jpg" alt="IMG_20191230_221149.jpg"></img>
<img src="gallery/SAM_1387.JPG" alt="SAM_1387.JPG"></img>
<img src="gallery/SAM_1398.JPG" alt="SAM_1398.JPG"></img>
<img src="gallery/SAM_2102.JPG" alt="SAM_2102.JPG"></img>

        </div>
    );
}
export default Gallery;