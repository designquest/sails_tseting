/**
 * CommentController
 *
 * @module		:: Controller
 * @description	:: Add user's comments.
 */

module.exports = {

  index: function (req, res) {
  
    Comment.find().limit(10).sort('name ASC').done(function(err, objs) {
      if (err) {
        res.json(err);
      } else {
        res.view('comment/index', { objs: objs });
        //res.json({objs:objs});
      }
    });
    
  },

  create: function (req, res) {
    Comment.create( req.query ).done( function(err, obj) {
        if (err) {
            console.log(err);
        } else {
            obj.save(function(err) {
              if (err) {
                console.log(err);
              } else {
                res.json(obj);
                console.log("New comment saved. Id:" + obj.id);
              }
            })
        }
    }) 
  },
  
  destroy: function (req, res) {
  
    var result = {
        id: req.param('id'),
        action: "destroy",
        success: false
      };
  
    Comment.findOne(result.id).done(function(err, obj) {
        
      if (err) {
         res.json(_.extend(result, err));
      } else {
        if (obj) {
         obj.destroy(function(err) {
            if (err) {
              res.json(_.extend(result, err));
            } else {
              res.json(_.extend(result, { success: true }));
            }
          });
        } else {
          res.json(_.extend(result, { err: "Record not found" }));
        }
      }
    });
  }
  

};
