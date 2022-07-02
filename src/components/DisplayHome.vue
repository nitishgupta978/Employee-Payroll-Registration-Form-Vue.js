<template>
  <table id="display" className="display">
    <tbody>
      <tr>
        <th>Profile Image</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Departments</th>
        <th>Salary</th>
        <th>Start Date</th>
        <th>Notes</th>
        <th>Actions</th>
      </tr>
      <tr v-for="employees in employee" :key="employee.id">
          <td><img :src=' `../assets/${employees.profilePic}` ' /> ></td>
          <td>{{employees.name}}</td>
          <td>{{employees.gender}}</td>
          <td>{{employees.department}}</td>
          <td>{{employees.salary}}</td>
          <td>{{employees.startDate}}</td>
           <td>{{employees.note}}</td>
           <td>
             <v-bottom-navigation
      v-model="value"
      :input-value="active"
      color="indigo"
       />
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>
            <img
            @click="remove(employees.employeeId)"
            src="../assets/filled-trash.png"
            alt="delete"/>

             <img
            @click="update(employees.employeeId)"
            src="../assets/edit.png"
            alt="edit"/>

           </td>
      </tr>

    </tbody>
  </table>
</template>
<script>

import EmployeeService from '../Service/EmployeeService';

export default {
  name: "DisplayHome",

  data(){
    return{
    employee:[],
    }
  },

  methods:{
     getEmployees() {
      EmployeeService.getAllEmployee().then((response) => {
        console.log(response.data.data);
        this.employee = response.data.data;
      });
  },

  },
 created() {
   
    this.getEmployees();
  },
}
</script> 
