let data = [
    {id: 1, name:"Nguyễn Thị Hương", gender: "nữ",insurance:'49926', CCCD:'92179',address:"123 Đường Nguyễn Du, Quận 1, TP.Hồ Chí Minh", phone: '60417',history: "không",XNresult: "âm tính",timein: "2024-05-07",timeout:"2024-05-07",doctor: "Tùng",condition: "Đang điều trị"},
    {id: 2, name:"Trần Văn Anh", gender: "nam",insurance:'10361', CCCD:'92679',address:"456 Đường Lê Lợi, Quận 1, TP.Hồ Chí Minh", phone: '42530',history: "không",XNresult: "dương tính",timein: "2024-05-07",timeout:"2024-05-07",doctor: "Tùng",condition: "Đang điều trị"},
    {id: 3, name:"Lê Thị Thu Hà", gender: "nữ",insurance:'81640', CCCD:'85065',address:"789 Đường Đồng Khởi, Quận 1, TP.Hồ Chí Minh", phone: '31471',history: "không",XNresult: "âm tính",timein: "2024-05-07",timeout:"2024-05-07",doctor: "Tùng",condition: "Đang điều trị"},
    {id: 4, name:"Phạm Minh Tuấn", gender: "nam",insurance:'36194', CCCD:'71383',address:"593 Đường Phan Văn Trị, Quận Bình Thạnh, TP.Hồ Chí Minh", phone: '22097',history: "không",XNresult: "dương tính",timein: "2024-05-07",timeout:"2024-05-07",doctor: "Tùng",condition: "Đang điều trị"},
    {id: 5, name:"Ngô Thị Mai", gender: "nữ",insurance:'75120', CCCD:'75063',address:"654 Đường Xô Viết Nghệ Tĩnh, Quận Bình Thạnh, TP.Hồ Chí Minh", phone: '56740',history: "không",XNresult: "âm tính",timein: "2024-05-07",timeout:"2024-05-08",doctor: "Tùng",condition: "Đang điều trị"},
    {id: 6, name:"Mai Văn Hùng", gender: "nam",insurance:'12391', CCCD:'48362',address:"101 Đường Lê Văn Lương, Quận 7, TP.Hồ Chí Minh", phone: '99717',history: "không",XNresult: "dương tính",timein: "2024-05-08",timeout:"2024-05-08",doctor: "Khoa",condition: "Đang điều trị"},
    {id: 7, name:"Đặng Thị Lan Anh", gender: "nữ",insurance:'43580', CCCD:'96036',address:"321 D2 Đường Nguyễn Gia Trí, Quận Bình Thạnh, TP.Hồ Chí Minh", phone: '83522',history: "không",XNresult: "âm tính",timein: "2024-05-08",timeout:"2024-05-08",doctor: "Khoa",condition: "Đang điều trị"},
    {id: 8, name:"Hoàng Minh Đức", gender: "nam",insurance:'73886', CCCD:'26664',address:"987 Đường Phan Đăng Lưu, Quận Bình Thạnh, TP.Hồ Chí Minh", phone: '90197',history: "không",XNresult: "dương tính",timein: "2024-05-08",timeout:"2024-05-08",doctor: "Khoa",condition: "Đang điều trị"},
    {id: 9, name:"Vũ Thị Hồng", gender: "nữ",insurance:'11935', CCCD:'37771',address:"234 Đường Vũ Huy Tấn, Quận Bình Thạnh, TP.Hồ Chí Minh", phone: '37810',history: "không",XNresult: "âm tính",timein: "2024-05-08",timeout:"2024-05-08",doctor: "Khoa",condition: "Đang điều trị"},
    {id: 10, name:"Lý Quang Minh", gender: "nam",insurance:'68489', CCCD:'67389',address:"890 Đường Hoàng Quốc Việt, Quận 7, TP.Hồ Chí Minh", phone: '75957',history: "không",XNresult: "dương tính",timein: "2024-05-08",timeout:"2024-05-09",doctor: "Khoa",condition: "Đang điều trị"},
    {id: 11, name:"Thanh Thảo", gender: "nam",insurance:'34343', CCCD:'34347',address:"34872034", phone: '75957',history: "không",XNresult: "dương tính",timein: "2024-05-08",timeout:"2024-05-09",doctor: "Khoa",condition: "Đang điều trị"}
]
// hiển thị danh sách bệnh nhân sau các chỉnh sửa.
function readAll(){
    localStorage.setItem( "object", JSON.stringify(data));
    var tabledata = document.querySelector(".data_table");
    var object = localStorage.getItem('object');
    var objectdata = JSON.parse(object);
    var elements="";
    objectdata.map(record =>(
        elements += `<tr>
           <td>${record.name}</td> 
           <td>${record.phone}</td>
           <td>${record.gender}</td>
           <td>${record.insurance}</td>
           <td>${record.CCCD}</td>
           <td>${record.address}</td>
           <td>${record.history}</td>
           <td>${record.XNresult}</td>
           <td>${record.timein}</td>
           <td>${record.timeout}</td>
           <td>${record.doctor}</td>
           <td>${record.condition}</td>
           <td>
               <button class="edit" onclick={edit(${record.id})}>Chỉnh sửa</button>
               <button class="delete" onclick={Delete(${record.id})}>Xóa</button>
           </td>
        </tr>`
    ))

    tabledata.innerHTML = elements;
} 
//tạo form
function create(){
    document.querySelector(".create_form").style.display="block";
    document.querySelector(".add_div").style.display="none";
}

function add(){
    var maxId = Math.max(...data.map(item => item.id)); // Tìm `id` lớn nhất
    var name = document.querySelector(".name").value;
    var phone = document.querySelector(".phone").value;
    var gender = document.querySelector(".gender").value;
    var insurance = document.querySelector(".insurance").value;
    var CCCD = document.querySelector(".CCCD").value;
    var address = document.querySelector(".address").value;
    var history = document.querySelector(".history").value;
    var XNresult = document.querySelector(".XNresult").value;
    var timein = document.querySelector(".timein").value;
    var timeout = document.querySelector(".timeout").value;
    var doctor = document.querySelector(".doctor").value;
    var condition = document.querySelector(".condition").value;
    var newObj = {id: maxId + 1, name: name, gender: gender, insurance: insurance, CCCD: CCCD, address: address ,phone: phone, history: history, XNresult: XNresult,timein: timein, timeout: timeout, doctor: doctor, condition: condition}; 
    data.push(newObj);


    document.querySelector(".create_form").style.display="none";
    document.querySelector(".add_div").style.display="block";
    

    readAll();  
}

//xóa + chỉnh sửa bệnh nhân
function Delete(id){
    data = data.filter(rec => rec.id !== id);
    readAll();
}

function edit(id){
    document.querySelector('.update_form').style.display = "block";
    var obj = data.find(rec => rec.id === id);
    document.querySelector('.uname').value = obj.name;
    document.querySelector('.uphone').value = obj.phone;
    document.querySelector('.ugender').value = obj.gender;
    document.querySelector('.uinsurance').value = obj.insurance;
    document.querySelector('.uCCCD').value = obj.CCCD;
    document.querySelector('.uaddress').value = obj.address;
    document.querySelector('.uhistory').value = obj.history;
    document.querySelector('.uXNresult').value = obj.XNresult;
    document.querySelector('.utimein').value = obj.timein;
    document.querySelector('.utimeout').value = obj.timeout;
    document.querySelector('.udoctor').value = obj.doctor;
    document.querySelector('.ucondition').value = obj.condition;
    document.querySelector('.id').value = obj.id;
}

function update(){
    var id = parseInt(document.querySelector('.id').value);
    var name = document.querySelector('.uname').value;
    var phone = document.querySelector('.uphone').value;
    var gender = document.querySelector('.ugender').value;
    var insurance = document.querySelector('.uinsurance').value;
    var CCCD = document.querySelector('.uCCCD').value;
    var address = document.querySelector('.uaddress').value;
    var history = document.querySelector('.uhistory').value;
    var XNresult = document.querySelector('.uXNresult').value;
    var timein = document.querySelector('.utimein').value;
    var timeout = document.querySelector('.utimeout').value;
    var doctor = document.querySelector('.udoctor').value;
    var condition = document.querySelector('.ucondition').value;

    var index = data.findIndex(rec => rec.id === id);
    data[index] = {id, name, gender, phone, insurance, CCCD, address, history, XNresult, timein, timeout, doctor, condition};
    readAll();

    document.querySelector('.update_form').style.display = "none";

}
// tìm bệnh nhân khi biết ID
function findPatient(){
    document.querySelector(".find_form").style.display ="block";
    document.querySelector(".add_div").style.display ="none";
}
//hiển thị thông tin bệnh nhân
function displayPatient(){
    var id = parseInt(document.querySelector('.fid').value);
    var patient = data.find(record => record.id === id);

    if (patient) {
        document.querySelector(".infor").innerHTML = `
            <h2>Thông tin bệnh nhân</h2>
            <p><strong>Tên:</strong> ${patient.name}</p>
            <p><strong>Giới tính:</strong> ${patient.gender}</p>
            <p><strong>Bảo hiểm y tế:</strong> ${patient.insurance}</p>
            <p><strong>CCCD:</strong> ${patient.CCCD}</p>
            <p><strong>Địa chỉ:</strong> ${patient.address}</p>
            <p><strong>Lịch sử bệnh:</strong> ${patient.history}</p>
            <p><strong>Kết quả xét nghiệm:</strong> ${patient.XNresult}</p>
            <p><strong>Thời gian vào viện:</strong> ${patient.timein}</p>
            <p><strong>Thời gian ra viện:</strong> ${patient.timeout}</p>
            <p><strong>Bác sĩ điều trị:</strong> ${patient.doctor}</p>
            <p><strong>Tình trạng:</strong> ${patient.condition}</p>
            <p><button class="goback" onclick="goback()">Quay lại</button></p>
        `;
    } else {
        document.querySelector(".infor").innerHTML =   `<p>Không tìm thấy bệnh nhân.</p>
        <p><button class="goback" onclick="goback()">Quay lại</button></p>
        `
    }
}

// quay lại màn hình chính
function goback() {
    document.querySelector(".add_div").style.display = "block";
    document.querySelector(".find_form").style.display = "none";
    document.querySelector(".infor").innerHTML = "";
}
