/**
 * load models
 */
try {
  require('./db.index')
} catch (error) {
  throw error
}

/**
 * load services
 */
try {
  require('./service.index')
} catch (error) {
  throw error
}

const notice = `
  ***********************************************************************
  *****************************        **********************************
  ***************************** MSLITE **********************************
  *****************************        **********************************
  ***********************************************************************
`
console.log(notice)
