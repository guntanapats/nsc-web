// import React, {useState, useEffect} from 'react';
// import Box from '@mui/material/Box';
// import styled from 'styled-components';
// import FontSizeChanger from 'react-font-size-changer';
// import Adminsidebar from './AdminSidebar/adminsidebar';
// const StyledInput = styled.input`
//   display: block;
//   margin: 20px 0px;
//   border: 1px solid lightblue;
// `;
// // Creating a custom hook
// function useInput(defaultValue) {
//   const [value, setValue] = useState(defaultValue);
//   function onChange(e) {
//     setValue(e.target.value);
//   }
//   return {
//     value,
//     onChange,
//   };
// }

// export default function UploadImage() {
//     const [images, setImages] = useState([]);
//     const [imageURLs, setImageURLs] = useState([]);

//     useEffect(() => {
//         if (images.length < 1) return;
//         const newImageUrls = [];
//         images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
//         setImageURLs(newImageUrls);
//     }, [images]);


//     function onImageChange(e) {
//         setImages([...e.target.files]);
//     }
//     const inputProps = useInput();
//     return (

//         <div className='nscinfo'>
//             <Adminsidebar/>
//             <div className='nscinfo'>
//            <h1>-----------------------------------</h1>
//              <h1 align = 'center'> Admin Console</h1>
//              <h1>-----------------------------------</h1>
//              <h3 align = 'center'>เเก้ไขข้อมูล</h3>
//              <h1>-----------------------------------</h1>
//              <Adminsidebar/>
//              <Accordion defaultActiveKey="0" flush>
//              <Accordion.Item eventKey="0">
//                  <Accordion.Header>ลงชื่อใส่ email</Accordion.Header>
//                  <Accordion.Body>
//                  <Form>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                  <Form.Label>Email address</Form.Label>
//                  <Form.Control type="email" placeholder="Enter email" />
//                  <Form.Text className="text-muted">
//                  ที่อยู่ email สำหรับใช้งาน
//                  </Form.Text>
//              </Form.Group>

//              <Form.Group className="mb-3" controlId="formBasicPassword">
//                  <Form.Label>Password</Form.Label>
//                  <Form.Control type="password" placeholder="Password" />
//                  <Form.Text className="text-muted">
//                  ถ้าต้องการเปลี่ยนรหัสผ่าน กรุณากรอกรหัสผ่านสองช่องให้ตรงกัน
//                  </Form.Text>
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicPassword">
//                  <Form.Label>Password Again</Form.Label>
//                  <Form.Control type="password" placeholder="Password" />
//              </Form.Group>
            
//              <Button variant="primary" type="submit">
//                  Submit
//              </Button>
//              </Form>

//                  </Accordion.Body>
//                  <h1>-----------------------------------</h1>
//                  <h3 align = 'center'>รายละเอียดโครงการ</h3>
//                  <h1>-----------------------------------</h1>
//              </Accordion.Item>
//              <Accordion.Item eventKey="1">
//                  <Accordion.Header>เเก้ไขข้อมูลรายละเอียดต่างๆ</Accordion.Header>
//                  <Accordion.Body>

//                  </Accordion.Body>
//                  </Accordion.Item>
//              <Accordion.Item eventKey="2">
//                  <Accordion.Header>เเทรกข้อมูลเกียรติบัตร</Accordion.Header>
//                  <Accordion.Body>
                
//                  <Form.Group controlId="formFile" className="mb-3">
//                      <Form.Label>ใส่ข้อมูลที่จะนำเสนอ</Form.Label>
//                      <Form.Control type="file" />
//                  </Form.Group>
//                  <Form.Group controlId="formFile" className="mb-3">
//                      <Form.Label>เกียรติบัตรหัวหน้าโครงการ</Form.Label>
//                      <Form.Control type="file" />
//                  </Form.Group>  
//                  <Form.Group controlId="formFile" className="mb-3">
//                      <Form.Label>เกียรติบัตรผู้พัฒนาคนที่2</Form.Label>
//                      <Form.Control type="file" />
//                  </Form.Group>
//                  <Form.Group controlId="formFile" className="mb-3">
//                      <Form.Label>เกียรติบัตรผู้พัฒนาคนที่3</Form.Label>
//                      <Form.Control type="file" />
//                  </Form.Group>
//                  <Form.Group controlId="formFile" className="mb-3">
//                      <Form.Label>เกียรติบัตรอาจารย์ที่ปรึกษา</Form.Label>
//                      <Form.Control type="file" />
//                  </Form.Group>            
//                  </Accordion.Body>
//              </Accordion.Item>
//              </Accordion>
//              </div>
//              </div>
//              );

// }             


            {/* <center>
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
                                <h4>สมาชิก(Member)</h4>
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                                width: 900,
                                height: 10,
                                backgroundColor: '#9e9e9e'
                            }}>
                                <h5 align = 'left'>รูปสมาชิก </h5>
                            
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
                                
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                                width: 900,
                                height: 10,
                                backgroundColor: '#9e9e9e'
                            }}>
                            <h5 align = 'left'>Body </h5>
                    </Box>
                    <Box 
                        sx={{
                            flex: '1 1 auto',
                            p: 3,
                            backgroundColor:'#e0e0e0'
                        }}>
                    {/* { <input type="file" multiple accept="image/*" onChange={onImageChange} />
                    { imageURLs.map(imageSrc => <img src={imageSrc} />) } } */}
                    {/* <div className="app">
                        <FontSizeChanger
                        targets={['#target .content']}
                        onChange={(element, newValue, oldValue) => {
                            console.log(element, newValue, oldValue);
                        }}
                        options={{
                            stepSize: 2,
                            range: 3
                        }}
                        customButtons={{
                            up: <span style={{'fontSize': '36px'}}>A</span>,
                            down: <span style={{'fontSize': '20px'}}>A</span>,
                            style: {
                            backgroundColor: 'black',
                            color: 'white',
                            WebkitBoxSizing: 'border-box',
                            WebkitBorderRadius: '5px',
                            width: '60px'
                            },
                            buttonsMargin: 10
                        }}          
                        />
                        <div id="target">
                        <p className="content"><StyledInput {...inputProps}placeholder="ชื่อผู้เข้าเเข่งขัน"/></p>
                        </div>     
                    </div>   
                            
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                            }}>
                                <h4>เกียรติบัตร(Certificate)</h4>
                    </Box>
                    <Box
                            sx={{
                                p: 3,
                                width: 900,
                                height: 10,
                                backgroundColor: '#9e9e9e'
                            }}>
                                <h5 align = 'left'>เอกสารเกียรติบัตร </h5>
                            
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
            </center> */}
        {/* </div> */} 

