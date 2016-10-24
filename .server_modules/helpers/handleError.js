const handleError = (error, res) => {
    return res.status(500).json({
      success: false, message: 'Server error: ' + error
    })
}

module.exports = handleError
