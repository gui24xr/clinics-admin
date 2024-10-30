import { create } from "zustand";


const useDataStore = create((set,get) => ({
   data:{
      specialties:null,
      medicalServices:null,
      medics:null,
      patients:null,
      appointments:null
   },

   getSpecialties: async () =>{


   },

   getMedicalServices: async () =>{

      
   },

}))