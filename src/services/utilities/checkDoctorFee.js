export const checkDoctorFee = (doctor_fee) => {
  if (Object.keys(doctor_fee).length !== 0) {
    return {
      ...doctor_fee,
      id: doctor_fee.id.toString(),
      user_id: doctor_fee.user_id.toString(),
    }
  }
}
