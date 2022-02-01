import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { DownloadIcon } from "@chakra-ui/icons"
import styles from "./styles/download.module.scss"

export default function Member({}) {
  return (
    <LinkBox mt="10" href="/report.pdf" download>
      <LinkOverlay href="/report.pdf" download>
        <Box className={styles.button} display="flex" borderRadius="lg">
          <DownloadIcon />

          <Box ml="5" fontWeight="semibold" lineHeight="tight" isTruncated>
            Download technical report
          </Box>
        </Box>
      </LinkOverlay>
    </LinkBox>
  )
}
