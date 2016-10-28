export const handleHttpError = (res, error, status) => {
    return res.status(status).json({
      success: false, message: 'Error: ' + error
    })
}
