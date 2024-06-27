// import axios from 'axios';

// import React,{Component} from 'react';

// class Admininfo extends Component {

// 	state = {

// 	// Initially, no file is selected
// 	selectedFile: null
// 	};
	
// 	// On file select (from the pop up)
// 	onFileChange = event => {
	
// 	// Update the state
// 	this.setState({ selectedFile: event.target.files[0] });
	
// 	};
	
// 	// On file upload (click the upload button)
// 	onFileUpload = () => {
	
// 	// Create an object of formData
// 	const formData = new FormData();
	
// 	// Update the formData object
// 	formData.append(
// 		"myFile",
// 		this.state.selectedFile,
// 		this.state.selectedFile.name
// 	);
	
// 	// Details of the uploaded file
// 	console.log(this.state.selectedFile);
	
// 	// Request made to the backend api
// 	// Send formData object
// 	axios.post("api/uploadfile", formData);
// 	};
	
// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {
	
// 	if (this.state.selectedFile) {
		
// 		return (
// 		<div>
// 			<h2>File Details:</h2>
			
// <p>File Name: {this.state.selectedFile.name}</p>

			
// <p>File Type: {this.state.selectedFile.type}</p>

			
// <p>
// 			Last Modified:{" "}
// 			{this.state.selectedFile.lastModifiedDate.toDateString()}
// 			</p>

// 		</div>
// 		);
// 	} else {
// 		return (
// 		<div>
// 			<br />
// 			<h4>Choose before Pressing the Upload button</h4>
// 		</div>
// 		);
// 	}
// 	};
	
// 	render() {
	
// 	return (
// 		<div>
// 			<h1>
// 			กำหนดการแข่งขัน
// 			</h1>

// 			<div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 			<h1>
// 			กำหนดการแข่งขัน
// 			</h1>
//             <div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 			<h1>
// 			กำหนดการแข่งขัน
// 			</h1>
//             <div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 		{this.fileData()}
// 		</div>
// 	);
// 	}
// }



import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Adminsidebar from './AdminSidebar/adminsidebar';

export default function UploadImage() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);


    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <div>
            <Adminsidebar/>
            <center>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 900,
                        height: 1200,
                        minHeight: '100vh'
                    }}>
                    <Box
                            sx={{
                                p: 3,
                            }}>
                            <h4>
                                กำหนดการแข่งขัน
                            </h4>
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                                width: 900,
                                height: 10,
                                backgroundColor: '#9e9e9e'
                            }}>
                            Header
                    </Box>
                    <Box 
                        sx={{
                            flex: '1 1 auto',
                            p: 3,
                            backgroundColor:'#e0e0e0'
                        }}>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                    { imageURLs.map(imageSrc => <img src={imageSrc} />) }
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                            }}>
                                ข้อมูลติดต่อศูนย์ประสานงาน
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                                width: 900,
                                height: 10,
                                backgroundColor: '#9e9e9e'
                            }}>
                            Header
                    </Box>
                    <Box 
                        sx={{
                            flex: '1 1 auto',
                            p: 3,
                            backgroundColor:'#e0e0e0'
                        }}>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                    { imageURLs.map(imageSrc => <img src={imageSrc} />) }
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                            }}>
                                หัวข้อการแข่งขัน
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                                width: 900,
                                height: 10,
                                backgroundColor: '#9e9e9e'
                            }}>
                            Header
                    </Box>
                    <Box 
                        sx={{
                            flex: '1 1 auto',
                            p: 3,
                            backgroundColor:'#e0e0e0'
                        }}>
                    <input type="file" multiple accept="image/*" onChange={onImageChange} />
                    { imageURLs.map(imageSrc => <img src={imageSrc} />) }
                    </Box>
                    <Box 
                        sx={{
                            flex: '1 1 auto',
                            p: 3,
                            
                        }}>
                    </Box>
                </Box>
            </center>
        </div>
    
    );    

}


//             <Table striped bordered hover>
//             <thead>
//                 <tr>
//                 <th>ลำดับ</th>
//                 <th>รหัสโครงการ</th>
//                 <th>ชื่อโครงการ</th>
//                 <th>เเก้ไข</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                 <td>1</td>
//                 <td>24p11s0052</td>
//                 <td>โปรแกรมช่วยเหลือและวิเคราะห์เพื่อพัฒนาการเล่นAOV</td>
//                 <td><button type="button" class="btn btn-outline-danger">เเก้ไข</button></td>
                
//                 </tr>
//                 <tr>
//                 <td>2</td>
//                 <td>24p11s0078</td>
//                 <td>โปรแกรมเพื่อการศึกษาและส่งเสริมการเรียนรู้</td>
//                 <td><button type="button" class="btn btn-outline-danger">เเก้ไข</button></td>
            

//                 </tr>
                
//             </tbody>
//             </Table>
//             )

// };


// export default Admininfo;