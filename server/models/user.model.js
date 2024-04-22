import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['ADMIN', 'USER'],
        required: true
      },
      status: {
        type: String,
        enum: ['ACTIVE', 'ONBOARD', 'INACTIVE'],
        required: true
      },
      basic_info: {
        first_name: {
          type: String,
          required: true
        },
        last_name: {
          type: String,
          required: true
        },
        dob: {
          type: Date,
          required: true
        },
        gender: {
          type: String,
          enum: ['MALE', 'FEMALE'],
          required: true
        }
      },
      contact_info: {
        mobile_number: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        }
      },
      auth_info: {
        password: {
          type: String,
          required: true
        }
      }
    });

const User = mongoose.model('User', userSchema);

export default User;