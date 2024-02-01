import axios from 'axios';

const WEBSITE_API_BASE_URL = "http://localhost:8080/api/v1/Studentslist";
//  const WEBSITE_API_BASE_URL = "http://localhost:3000/websites";


class StudentService {
    // CRUD operation

    getstudent(){
        console.log()
        return axios.get(WEBSITE_API_BASE_URL);
    }

    createstudent(data){
        console.log(data)
        return axios.post(WEBSITE_API_BASE_URL, data);
    }

    getstudentById(studentId){
        return axios.get(WEBSITE_API_BASE_URL + '/' + studentId);
    }

    updatestudent(studentId,student){
        return axios.put(WEBSITE_API_BASE_URL + '/' + studentId,student);
    }

    deletestudent(studentId){
        console.log(studentId);
        return axios.delete(WEBSITE_API_BASE_URL + '/' + studentId);
    }
}

export default new StudentService()