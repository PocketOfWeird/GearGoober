const handleHttpError = (res, error, status) => {
    return res.status(status).json({
      success: false, message: 'Server error: ' + error
    })
}

module.exports = handleHttpError
