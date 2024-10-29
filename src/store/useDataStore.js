import { create } from "zustand";
import { DataService } from "../services/dataservice";

const useDataStore = create((set,get) => ({
   data:{
      specialties:null,
      medicalServices:null,
      medics:null,
      patients:null,
      appointments:null
   },

   filteredData:{
      specialties:null,
      medicalServices:null,
      medics:null,
      patients:null,
      appointments:null
   },



   getSpecialties: async () =>{
      try{

      }catch(error){
         console.log(error)
         throw error
      }
      
   },

   getMedicalServices: async () =>{

      
   },

}))