import React, { useState } from 'react';
import './form.css';
import { CgProfile } from 'react-icons/cg';
// import IMG1 from '../../assets/profile.png';


const Form = () => {

    const [data1, setData1] = useState("");
    const [data2, setData2] = useState("");
    const [data3, setData3] = useState("");
    const [data4, setData4] = useState("");
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);

    const setData11 = (e) => {
        setData1(e.target.value);
    }

    const setData22 = (e) => {
        setData2(e.target.value)
    }

    const setData33 = (e) => {
        setData3(e.target.value);
    }

    const setData44 = (e) => {
        setData4(e.target.value);
    }

    const setStudent = () => {
        arr1.push(data1, data2, data3, data4);
        arr2.push(arr1);
        console.log(arr2);
        setData1("");
        setData2("");
        setData3("");
        setData4("");
        setArr1([]);
    }


    return (
        <div className="form_main">
            <div className="left_form">
                <div className='form' >
                    <div className="row">
                        <div className="col-25">
                            <label for="fname">Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" value={data1} placeholder="Your name.." onChange={setData11} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="lname">Email</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" value={data2} placeholder="Your Email.." onChange={setData22} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="country">Website</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" value={data3} placeholder="Your Website Link.." onChange={setData33} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">Image link</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" value={data4} placeholder="Your Image link.." onChange={setData44} />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">Gender</label>
                        </div>
                        <div className="col-75">
                            <div className="fma">
                                <input type="radio" id="html" name="fav_language" value="HTML" />
                                <label for="html">Male</label>
                            </div>
                            <div className='fma'>
                                <input type="radio" id="css" name="fav_language" value="CSS" />
                                <label for="css">Female</label>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for="subject">Skills</label>
                        </div>
                        <div className="col-75 rows">
                            <div className="fma">
                                <input type="radio" id="java" name="fav_language1" value="No" />
                                <label for="html">JAVA</label>
                            </div>
                            <div className="fma">
                                <input type="radio" id="html" name="fav_language2" value="No" />
                                <label for="css">HTML</label>
                            </div>
                            <div className="fma">
                                <input type="radio" id="css" name="fav_language3" value="No" />
                                <label for="css">CSS</label>
                            </div>
                        </div>

                    </div>
                    <br />
                    <div className="row rows1">
                        <input type="submit" value="Enroll Student" onClick={setStudent} />
                        <input type="submit" value="Clear" />
                    </div>
                </div>
            </div>
            <div className="right_form">
                <h3>Enrolled Students</h3>
                <div className="students">
                    <table>
                        <tr>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                        {
                            arr2.map((item) => {
                                return (
                                    < tr >
                                        <td >
                                            <ul>
                                                {item.map((item1) => { return (<li>{item1}</li>) })}
                                                <li>Male</li>
                                                <li>Java</li>
                                            </ul>
                                        </td>
                                        <td><CgProfile className='icon' /></td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Form;