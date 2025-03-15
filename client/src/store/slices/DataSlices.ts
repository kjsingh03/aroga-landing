import { createSlice } from "@reduxjs/toolkit";
import { expert2, doctor1, upcomingDoctor, vcDoctor, expert4, expert6, expert3 } from "../../assets";
import { dataSliceInterface } from "../../types";

const initialState: dataSliceInterface = {
    upcomingAppointmentList: [{ doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, times: "12:00AM", date: "9 January", mode: "Online", queue: "23", id: "id1", documents: ['Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf'], fee: 900, paid: true, symptoms: ' A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue.' }, { doctor: { img: doctor1, name: "Dr. M. W.", speciality: "Orthologist", clinic: "Clinic name", location: "New Jersey, NY 10012," }, times: "7:00PM", date: "29 March", mode: "Offine", queue: "1", id: "id2", documents: ['Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf', 'Prescription.pdf'], fee: 500, paid: false, symptoms: 'A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue. A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue. A bacterial infection caused by the Brucella species, typically transmitted from animals to humans through unpasteurized dairy products or direct contact with infected animals. Symptoms include fever, joint pain, sweating, and fatigue.' }],

    medicationList: [{ doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med1", name: "Paroxetine 20 mg", times: "Twice daily", timeSlot: [{ time: "10:00AM", status: "Missed" }, { time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf", "Prescription.pdf"], from: 1721239202000, to: 1741239202000 }, { doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med2", name: "Paroxetine 50 mg", timeSlot: [{ time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf"], from: 1711239202000, to: 1741239702000 }, { doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med3", name: "Paroxetine 20 mg", times: "Twice daily", timeSlot: [{ time: "01:00PM", status: "Taken" }, { time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf", "Prescription.pdf", "Prescription.pdf", "Prescription.pdf", "Prescription.pdf"], from: 1740259202000, to: 1741259202000 }, { doctor: { img: upcomingDoctor, name: "Dr. Maria Waston", speciality: "Multi-speciality", clinic: "Health Clinic name", location: "632 Broadway, New York, NY 10012" }, id: "med4", name: "Paroxetine 50 mg", times: "Thrice daily", timeSlot: [{ time: "10:00AM", status: "Missed" }, { time: "01:00PM", status: "Taken" }, { time: "10:00PM", status: "Upcoming" }], documents: ["Prescription.pdf", "Prescription.pdf", "Prescription.pdf"], from: 1741239002000, to: 1741639202000 }],

    consultAgainDoctorList: [{ img: expert2, name: 'Nitasga singh bali', clinic: 'Grace clinic', experience: 2, specialization: 'specialization', rate: '$20 for 50 mins', id: 'doc1' }, { img: expert3, name: 'Doc Nitasga singh bali', clinic: 'Clinic', experience: 2, specialization: 'Orthologist', rate: '$20 for 50 mins', id: 'doc1' }, { img: expert4, name: 'Nitasga singh bali', clinic: 'Grace clinic', experience: 2, specialization: 'specialization', rate: '$20 for 50 mins', id: 'doc1' }, { img: vcDoctor, name: 'Doc Nitasga singh bali', clinic: 'Clinic', experience: 2, specialization: 'Orthologist', rate: '$20 for 50 mins', id: 'doc1' }, { img: expert6, name: 'Nitasga singh bali', clinic: 'Grace clinic', experience: 2, specialization: 'specialization', rate: '$20 for 50 mins', id: 'doc1' }],

    healthVaultRecords: [{ id: "1", timestamp: new Date("2025-03-13T10:00:00").getTime(), type: "Lab Report", prescriptionId: 111928823, hospital: "City Smiles Hospital", doctor: "Dr. Emily Smith", testName: "CBC Blood Test", tag: "Main", speciality: "Psychiatrist", state: "mental", diagnosis: 'malaria', doctorId: 86123961983 }, { id: "2", timestamp: new Date("2025-03-03T11:00:00").getTime(), type: "Lab Report", prescriptionId: 111928824, hospital: "City Smiles Hospital", doctor: "Dr. John Doe", testName: "LFT", tag: "Uploaded", speciality: "Cardiologist", state: "physical", diagnosis: 'Liver failure', doctorId: 86123961983 }, { id: "3", timestamp: new Date("2025-03-12T09:30:00").getTime(), type: "Prescription", prescriptionId: 111928825, hospital: "City Smiles Hospital", doctor: "Dr. Emily Smith", testName: "CBC Blood Test", tag: "Prescription", speciality: "Psychiatrist", state: "mental", diagnosis: 'malaria', doctorId: 86123961983 }, { id: "4", timestamp: new Date("2025-03-13T14:00:00").getTime(), type: "Lab Report", prescriptionId: 111928826, hospital: "General Hospital", doctor: "Dr. Mark Lee", testName: "Bllod Test", tag: "Lab Report", speciality: "Endocrinologist", state: "physical", diagnosis: 'malaria', doctorId: 86123961983 }, { id: "5", timestamp: new Date("2024-02-13T14:00:00").getTime(), type: "Lab Report", prescriptionId: 111928826, hospital: "General Hospital", doctor: "Dr. Mark Lee", testName: "PET Scan", tag: "Lab Report", speciality: "Endocrinologist", state: "physical", diagnosis: 'Blood Cancer', doctorId: 86123961983 }, { id: "6", timestamp: new Date("2025-02-13T14:00:00").getTime(), type: "Lab Report", prescriptionId: 111928826, hospital: "General Hospital", doctor: "Dr. Mark Lee", testName: "Thyroid Panel", tag: "Lab Report", speciality: "Endocrinologist", state: "physical", diagnosis: 'malaria', doctorId: 86123961983 }, { id: "7", timestamp: new Date("2025-02-17T11:00:00").getTime(), type: "Lab Report", prescriptionId: 111928824, hospital: "City Smiles Hospital", doctor: "Dr. John Doe", testName: "Lipid Profile", tag: "Uploaded", speciality: "Cardiologist", state: "mental", diagnosis: 'malaria', doctorId: 86123961983 }, { id: "8", timestamp: new Date("2024-01-28T11:00:00").getTime(), type: "Lab Report", prescriptionId: 111928824, hospital: "City Smiles Hospital", doctor: "Dr. John Doe", testName: "Lipid Profile", tag: "Uploaded", speciality: "Cardiologist", state: "physical", diagnosis: 'Cholera', doctorId: 86123961983 },],

};

const dataSlice = createSlice({
    name: "UI",
    initialState,
    reducers: {
        setUpcomingAppointmentList: (state, action) => {
            state.upcomingAppointmentList = action.payload
        },
        setMedicationList: (state, action) => {
            state.medicationList = action.payload
        },
        setConsultAgainDoctorList: (state, action) => {
            state.consultAgainDoctorList = action.payload
        },
        setHealthVaultRecords: (state, action) => {
            state.healthVaultRecords = action.payload
        },
    }
});

export const { setMedicationList, setUpcomingAppointmentList, setConsultAgainDoctorList, setHealthVaultRecords } = dataSlice.actions;

export default dataSlice.reducer;