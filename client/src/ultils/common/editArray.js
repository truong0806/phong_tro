export const editMaxMin = (arr, type) => {
    let doituongMoi1 = arr.map(function (doituong1) {
      var giaTri = doituong1.value;
      var mangGiaTri = giaTri.split(' ');
      var doituongMoi = Object.assign({}, doituong1);
      if (type === 'price') {
        if (mangGiaTri[0] === 'Dưới') {
          doituongMoi.min = 0;
          doituongMoi.max = parseFloat(mangGiaTri[1]);
        } else if (mangGiaTri[0] === 'Từ') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = parseFloat(mangGiaTri[3]);
        } else if (mangGiaTri[0] === 'Trên') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = 99999999;
        }
      } else {
        if (mangGiaTri[0] === 'Dưới') {
          doituongMoi.min = 0;
          doituongMoi.max = parseFloat(mangGiaTri[1]);
        } else if (mangGiaTri[0] === 'Từ') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = parseFloat(mangGiaTri[3]);
        } else if (mangGiaTri[0] === 'Trên') {
          doituongMoi.min = parseFloat(mangGiaTri[1]);
          doituongMoi.max = 99999999;
        }
      }
      return doituongMoi;
    });
    return doituongMoi1
  }