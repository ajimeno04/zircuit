import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import SvgIcon from '@mui/material/SvgIcon'
import NetworkError from '@/public/images/apps/network-error.svg'

import css from './styles.module.css'
import ExternalLink from '@/components/common/ExternalLink'

type SafeAppsLoadErrorProps = {
  onBackToApps: () => void
}

const SafeAppsLoadError = ({ onBackToApps }: SafeAppsLoadErrorProps): React.ReactElement => {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Typography variant="h1">Safe App could not be loaded</Typography>

        <SvgIcon component={NetworkError} inheritViewBox className={css.image} />

        <div>
          <Typography component="span">In case the problem persists, please report it through our</Typography>
          <ExternalLink href="https://safe-support.protofire.io/" fontSize="medium">
            Form
          </ExternalLink>
        </div>

        <Button href="#back" color="primary" onClick={onBackToApps}>
          Go back to the Safe Apps list
        </Button>
      </div>
    </div>
  )
}

export default SafeAppsLoadError
