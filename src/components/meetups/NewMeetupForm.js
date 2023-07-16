import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm () {
    return (
      <Card>
        <form className={classes.form}>
          <div className={classes.control}>
            <labe htmlFor='title'>Meetup Title</labe>
            <input type='text' required id='title' />
          </div>
          <div className={classes.control}>
            <labe htmlFor='title'>Meetup Image</labe>
            <input type='url' required id='image' />
          </div>
          <div className={classes.control}>
            <labe htmlFor='address'>Address</labe>
            <input type='text' required id='address' />
          </div>
          <div className={classes.control}>
            <labe htmlFor='description'>Description</labe>
            <textarea id='description' required rows='5'></textarea> 
          </div>
          <div className={classes.actions}>
            <button>Add Meetup</button>
          </div>
        </form>
      </Card>
    );
}

export default NewMeetupForm;