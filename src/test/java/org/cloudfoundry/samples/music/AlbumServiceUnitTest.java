package org.cloudfoundry.samples.music;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.Test;
import org.mockito.Mockito;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class AlbumServiceUnitTest {

    private AlbumService albumService;
    private AlbumRepository albumRepository;

    @Before
    public void setup() {
        albumRepository = Mockito.mock(AlbumRepository.class);
        albumService = new AlbumService(albumRepository);
    }

    @Test
    public void testAddAlbum() {
        Album album = new Album();
        album.setTitle("Test Album");
        album.setArtist("Test Artist");

        Mockito.when(albumRepository.save(album)).thenReturn(album);

        Album result = albumService.addAlbum(album);

        assertNotNull(result);
        assertEquals("Test Album", result.getTitle());
        assertEquals("Test Artist", result.getArtist());
        Mockito.verify(albumRepository).save(album);
    }

    @Test
    public void testDeleteAlbum() {
        Long albumId = 123L;
        Album album = new Album();
        album.setId(albumId);

        Mockito.when(albumRepository.findById(albumId)).thenReturn(Optional.of(album));
        Mockito.doNothing().when(albumRepository).delete(album);

        boolean deleted = albumService.deleteAlbum(albumId);

        assertTrue(deleted);
        Mockito.verify(albumRepository).findById(albumId);
        Mockito.verify(albumRepository).delete(album);
    }

    @Test
    public void testDeleteAlbum_NotFound() {
        Long albumId = 999L;

        Mockito.when(albumRepository.findById(albumId)).thenReturn(Optional.empty());

        boolean deleted = albumService.deleteAlbum(albumId);

        assertFalse(deleted);
        Mockito.verify(albumRepository).findById(albumId);
        Mockito.verify(albumRepository, Mockito.never()).delete(Mockito.any());
    }
}
