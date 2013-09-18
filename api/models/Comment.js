/**
 * Comment
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
  	
  	name:'string',
  	message:'string',
  	
  	email: {
  	 type:'email',
  	 required:true
  	}
    
  }

};
