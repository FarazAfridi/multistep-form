import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paperStyles: {
    margin: '20px 20px 0 20px'
  }
}));


function getSteps() {
    return ["Form 1 out of 3", "Form 2 out of 3", "Form 3 out of 3"];
  }

function getStepContent(step: number, handleNext: () => void) {
  switch (step) {
    case 0:
      return <Form1 handleNext={handleNext} />;
    case 1:
      return <Form2 handleNext={handleNext} />;
    case 2:
      return <Form3 handleNext={handleNext} />;
    default:
      return "Unknown step";
  }
}

export default function StepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    console.log('next clicked');
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Paper className={classes.paperStyles} elevation={3}>
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep, handleNext)}
            </Typography>
          </div>
        )}
      </div>
    </div>
    </Paper>
  );
}
